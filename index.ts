/// <reference types="./types/common/interfaces" />

export function useHelpers() {
  /**
   * Text helper - separate a list of strings by commas/and
   * e.g. `one, two and three`. To be used in a loop.
   *
   * NB: each element should be styled inline-block for white space to be correct.
   * @since   0.0.1
   *
   * @param   {string[]} list    list of words/labels
   * @param   {number}   count  current iteration of loop
   *
   * @return  {string}         sentence e.g. `one, two and three`
   */
  const commaSeparator = (list: any, count: number): string => {
    if (count === list.length - 1) return "";
    return count === list.length - 2 ? " and " : ", ";
  };

  /**
   * Normalise a string and make it url (or v-for key) safe
   * @since   0.0.1
   *
   * @param   {string}  title  - e.g. Any string; with spaces or goofy -- characters
   * @return  {string}         - e.g. any-string-with-spaces-or-goofy-characters
   */
  const slugify = (title: string): string => {
    return title
      .toString()
      .normalize("NFKD")
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/[-\s]+/g, "-");
  };

  /**
   * Convert date to standard date string style
   * @since   0.0.1
   *
   * @param   {Date}    date  - machine readable date as stored, for example in a database
   * @return  {string}        - human readable date, as might be seen on a blog
   */
  const prettyDate = (date: Date): string => {
    return new Date(date).toLocaleString("en-AU", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  /**
   * Find matching array object by its id
   *
   * @since   0.0.2
   * @param   { string }              id     - e.g. ID of release, `OH-xxx`
   * @param   { GenericObject[] }     list   - object[] with `id` property
   * @return  { object|undefined }           - Matching item (if found)
   */
  const getIndexById = (
    id: string,
    list: UseHelpers.GenericObject[]
  ): object | undefined => {
    return list.find((index) => index.id === id);
  };
  };

  return {
    commaSeparator,
    slugify,
    prettyDate,
    getIndexById,
  };
}
