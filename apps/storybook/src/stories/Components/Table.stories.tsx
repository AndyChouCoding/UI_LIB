import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer } from '@andychoucoding/ui';
import { figmaDesignParam } from '../../figma-links';

const rows = [
  { name: 'Alpha', status: 'Active' },
  { name: 'Beta', status: 'Inactive' },
  { name: 'Gamma', status: 'Active' },
];

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: { design: figmaDesignParam('Table') },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
};
