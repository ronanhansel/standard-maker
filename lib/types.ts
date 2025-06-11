import type { getDictionary } from './get-dictionaries';

export type DictionaryType = Awaited<ReturnType<typeof getDictionary>>;
