import type { TableBlockContent, TableBlockHeadings } from '../models'

const mapDatasetForVerticalTable = (content: TableBlockContent, headingKeys: string[]) => {
  if (!headingKeys) return []
  const sortedContent: string[] = []
  content.forEach((col) => {
    headingKeys.forEach((headingKey) => {
      sortedContent.push(col[headingKey])
    })
  })
  return sortedContent
}

const mapDatasetForHorizontalTable = (headings: TableBlockHeadings, content: TableBlockContent) =>
  headings?.reduce(
    (groups, { id, label }) => {
      const prevValues = groups[id] || []
      const valuesToAdd = content.reduce((acc: string[], item) => {
        if (item[id]) acc.push(item[id])
        return acc
      }, [])
      groups[label] = [...prevValues, ...valuesToAdd]
      return groups
    },
    {} as { [key: string]: string[] },
  )

export { mapDatasetForHorizontalTable, mapDatasetForVerticalTable }
