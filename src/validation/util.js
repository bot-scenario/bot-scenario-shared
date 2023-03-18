export const mapJoiErrorsToArray = ({ error }) => {
  return error.details.reduce((allErrors, { message, path }) => {
    const [key] = path
    const propErrors = allErrors[key] || []

    return {
      ...allErrors,
      [key]: propErrors.concat(message),
    }
  }, {})
}
