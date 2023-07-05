export const getUpdatedNewArrayItem = (array, itemRefOrIndex, updated) => {
  const index =
    typeof itemRefOrIndex === 'number'
      ? itemRefOrIndex
      : array.findIndex((item) => item === itemRefOrIndex)

  return [...array.slice(0, index), updated, ...array.slice(index + 1)]
}
