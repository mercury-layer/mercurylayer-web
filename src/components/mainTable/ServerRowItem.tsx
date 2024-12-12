import { Nip87ServerInfo } from '@/types';
import { List, Modal, Rating, Table, Tooltip } from "flowbite-react";
import React from 'react'

const ServerRowItem = ({ server }: { server: Nip87ServerInfo }) => {
  return (
    <>
      <Table.Row className="dark:bg-gray-800">
        {/* Reviewed By */}
        <Table.Cell>
            {server.content}
        </Table.Cell>

        <Table.Cell>
            {server.url}
        </Table.Cell>

        <Table.Cell>
            {server.location}
        </Table.Cell>

        <Table.Cell>
            {server.timelock}
        </Table.Cell>

        <Table.Cell>
            {server.status}
        </Table.Cell>

        <Table.Cell>
            {server.fee[0] + " " + server.fee[1]}
        </Table.Cell>

        <Table.Cell>
            {server.fee[2] === 'true' ? "Yes" : "No"}
        </Table.Cell>

        <Table.Cell>
            {server.fee[3] === 'true' ? "Yes" : "No"}
        </Table.Cell>

        </Table.Row>
    </>
  )
}

export default ServerRowItem
