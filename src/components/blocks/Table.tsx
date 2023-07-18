import React from 'react'

import chunk from 'lodash.chunk'
import styled from 'styled-components'
import Markdown from 'markdown-to-jsx'

import { commonParagraphsStyles } from './Markdown'

import { TableBlock } from '../../models'
import { mapDatasetForHorizontalTable, mapDatasetForVerticalTable } from '../../utils'

export const Table = ({ block }: { block: TableBlock }) => {
  if (!block || !block?.structure?.headings || !block?.content) return null

  const { caption, structure, content } = block

  const mapValuesByOrientation: {
    vertical: string[]
    horizontal: { [key: string]: string[] }
  } = {
    vertical: mapDatasetForVerticalTable(
      content,
      Object.values(structure.headings).map((head) => head.id),
    ),
    horizontal: mapDatasetForHorizontalTable(structure.headings, content),
  }

  return (
    <Container data-stylizable="block table-wrapper">
      <Caption data-stylizable="block table-caption">{caption}</Caption>
      <WrapperTable data-stylizable="block table">
        {structure.orientation === 'vertical' ? (
          <>
            <thead>
              <tr>
                {structure?.headings.map(({ label }, i) => (
                  <th key={`${i}_${label}`}>
                    <Head data-stylizable="block table-head">{label}</Head>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {chunk(mapValuesByOrientation.vertical, structure.headings.length).map(
                (columnTexts: string[], i: number) => (
                  <tr key={i}>
                    {columnTexts.map((text) => (
                      <td key={text}>{text && <Markdown>{text}</Markdown>}</td>
                    ))}
                  </tr>
                ),
              )}
            </tbody>
          </>
        ) : (
          <tbody>
            {mapValuesByOrientation.horizontal &&
              Object.entries(mapValuesByOrientation.horizontal).map(([headLabel, rowTexts], i) => (
                <tr key={`${i}_${headLabel}`}>
                  <th>
                    <Head data-stylizable="block table-head">{headLabel}</Head>
                  </th>
                  {rowTexts.map((text) => (
                    <td key={text}>{text && <Markdown>{text}</Markdown>}</td>
                  ))}
                </tr>
              ))}
          </tbody>
        )}
      </WrapperTable>
    </Container>
  )
}

const Container = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  display: flex;
  flex-direction: column;
  overflow: auto;
`

const WrapperTable = styled.table`
  border-collapse: collapse;
  table-layout: auto;
  @media (max-width: 769px) {
    display: block;
    width: 100%;
  }
  th {
    min-width: 8em;
    white-space: nowrap;
  }
  th,
  td {
    text-align: left;
    padding: 0.5em 0.7em 0.8em 0.7em;
    vertical-align: baseline;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  span {
    margin-top: unset;
  }
  p,
  span {
    ${commonParagraphsStyles}
  }
`

const Caption = styled.h4`
  margin-top: unset;
`

const Head = styled.h5`
  margin: unset;
`
