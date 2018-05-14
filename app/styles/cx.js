/**
 * Small util which provides an ability to add easy-to-read boolean
 * expressions for creating styles.
 * For example:
 * const classes = classnames({
 *   [1 === 1]: { flex: 1 },
 *   [!0]: { flexDirection: 'row' },
 *   [typeof 1 === 'undefined']: { backgroundColor: 'pink' },
 * });
 *
 * classes // => [{ flex: 1 }, { flexDirection: 'row' }]
 *
 * @param {Object} options style-classes object
 * @returns {Array} Returns an array with all the styles
 * passes the checks.
 */
const classnames = options => Object.entries(options)
  .reduce((acc, current) => {
    const styles = [...acc];
    // checking if the key's boolean expression is true
    if (current[0] === 'true') {
      const value = current[1];
      // pushing the new value to the styles array
      styles.push(value);
    }

    return styles;
  }, []);

export default classnames;
