// The file implements the Entity interface on the ComponentDefinition struct.
// This is not autogenerated.
package component

import (
	"fmt"
	"os"
	"path/filepath"

	"github.com/gofrs/uuid"
	"github.com/khulnasoft/meshkit/database"
	"github.com/khulnasoft/meshkit/models/meshmodel/entity"
	"github.com/khulnasoft/meshkit/utils"
	"gorm.io/gorm/clause"
)

func (c ComponentDefinition) TableName() string {
	return "component_definition_dbs"
}

func (c ComponentDefinition) Type() entity.EntityType {
	return entity.ComponentDefinition
}

func (c *ComponentDefinition) GenerateID() (uuid.UUID, error) {
	return uuid.NewV4()
}

func (c ComponentDefinition) GetID() uuid.UUID {
	return c.Id
}

func (c *ComponentDefinition) GetEntityDetail() string {
	return fmt.Sprintf("type: %s, definition version: %s, name: %s, model: %s, version: %s", c.Type(), c.Version, c.DisplayName, c.Model.Name, c.Model.Version)
}

func (c *ComponentDefinition) Create(db *database.Handler, hostID uuid.UUID) (uuid.UUID, error) {
	c.Id, _ = c.GenerateID()

	isAnnotation := c.Metadata.IsAnnotation

	if c.Component.Schema == "" && !isAnnotation { //For components which has an empty schema and is not an annotation, return error
		// return ErrEmptySchema()
		return uuid.Nil, nil
	}

	mid, err := c.Model.Create(db, hostID)
	if err != nil {
		return uuid.UUID{}, err
	}

	if !utils.IsSchemaEmpty(c.Component.Schema) {
		if c.Metadata.AdditionalProperties == nil {
			c.Metadata.AdditionalProperties = make(map[string]interface{})
		}
		c.Metadata.AdditionalProperties["hasInvalidSchema"] = true
	}

	c.ModelId = mid
	err = db.Omit(clause.Associations).Create(&c).Error
	return c.Id, err
}

func (m *ComponentDefinition) UpdateStatus(db *database.Handler, status entity.EntityStatus) error {
	return nil
}

func (c ComponentDefinition) WriteComponentDefinition(componentDirPath string) (bool, error) {
	if c.Component.Kind == "" {
		return false, nil
	}
	componentPath := filepath.Join(componentDirPath, c.Component.Kind+".json")
	if _, err := os.Stat(componentPath); err != nil {
		err := utils.WriteJSONToFile[ComponentDefinition](componentPath, c)
		return false, err
	}
	return true, nil
}
