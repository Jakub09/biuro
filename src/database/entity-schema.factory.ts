import { IndentifiableEntitySchema } from './identifiable-entity.schema';
import { AggregateRoot } from '@nestjs/cqrs';
export interface EntitySchemaFactory<
  TSchema extends IndentifiableEntitySchema,
  TEntity extends AggregateRoot,
> {
  create(entity: TEntity);
  createFromSchema(enitySchema: TSchema);
}
