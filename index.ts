/// <reference types="node" />
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
    if (count === list.length - 1) return ""
    return count === list.length - 2 ? " and " : ", "
  }

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
      .replace(/[-\s]+/g, "-")
  }

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
    })
  }

  /**
   * Trim a large string to 300 words or less, and add ellipsis
   * @since   0.0.8
   *
   * @param   {string}  textField - long text field
   * @param   {number}  cutPoint  - point at which to cut text off (default: 300)
   * @return  {string}            - excerpt
   */
  const excerptify = (textField: string, cutPoint: number = 300): string => {
    if (textField.trim().length <= cutPoint) return textField.trim()
    return textField.trim().substring(-1, cutPoint) + "..."
  }

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
    return list.find((index) => index.id === id)
  }

  /**
   * Reduce to array calculate total
   * @since   0.0.8
   * @param   { GenericObject[] }  productList - object[] with `id` property
   * @return  { number }                       - (float) total cost e.g. `0.00`
   */
  const calculateTotal = (productList: UseHelpers.GenericObject[]): number => {
    const total = productList
      .reduce((acc: any, product: any) => {
        if (!product.price) throw new Error("price expected")
        return (acc += product.price)
      }, 0)
      .toFixed(2)

    return parseFloat(total)
  }

  /**
   * Pluralise a word based on a number
   * @since   0.0.15
   * @param   {number}  number  - number of items
   * @param   {string}  word    - word to pluralise
   * @return  {string}          - e.g. `1 item` or `2 items`
   */
  const pluralise = (number: number, word: string): string => {
    return number === 1 ? `${number} ${word}` : `${number} ${word}s`
  }

  /**
   * Replace words from a specific vocabulary with upper case
   *
   * @param   {string}  words  any string of words, e.g. a repo title
   *
   * @return  {string}         The same string, with specific words in upper case
   */
  const vocabToUppercase = (words: string): string => {
    const vocabulary = /Une|Mamp|Wp|Json|Sql|Npm|Api|Cms|Ssg|Ccc|Sst/g
    return words?.replace(vocabulary,
      match => match?.toUpperCase()
    )
  }

  /**
   * Replace words from a specific vocabulary with lower case
   *
   * @param   {string}  words  any string of words, e.g. a repo title
   *
   * @return  {string}         The same string, with specific words in lower case
   */
  const vocabToLowercase = (words: string): string => {
    const vocabulary = /Www.|Chia.|Tw.|Issues.|Miclgael|/g
    return words
      ?.replace(vocabulary,
        match => match?.toLowerCase()
      )
  }

  return {
    commaSeparator,
    slugify,
    prettyDate,
    getIndexById,
    calculateTotal,
    excerptify,
    pluralise,
    vocabToUppercase,
    vocabToLowercase
  }
}
