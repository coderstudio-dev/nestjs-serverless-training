import {
  Create,
  Remove,
  Update,
  FindAll,
  FindOne,
  FindDrafts,
  FindManyWithTags,
} from './useCases';

export interface ArticleRepoInterface
  extends Create,
    Remove,
    Update,
    FindAll,
    FindOne,
    FindDrafts,
    FindManyWithTags {}
