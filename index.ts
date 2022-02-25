/// <reference types="./types/common/interfaces" />

export function useHelpers() {
  /**
   * Text helper - separate a list of strings by commas/and
   * e.g. `one, two and three`. To be used in a loop.
   *
   * NB: each element should be styled inline-block for white space to be correct.
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
   *
   * @param   {string}  title  Any string; with spaces or goofy -- characters
   * @return  {string}         any-string-with-spaces-or-goofy-characters
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
   *
   * @param   {Date}    date  machine readable date as stored, for example in a database
   *
   * @return  {string}        human readable date, as might be seen on a blog
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
   * @param   {string}           id        e.g. ID of release, `OH-xxx`
   * @param   {ObjectList}       arr
   * @return  {object|undefined}           Matching item (if found)
   */
  const getIndexById = (
    id: string,
    arr: UseHelpers.GenericObjectList[]
  ): object | undefined => {
    return arr.find((index) => index.id === id);
  };

  return {
    commaSeparator,
    slugify,
    prettyDate,
    getIndexById,
  };
}
