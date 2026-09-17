import type { Meta, StoryObj } from '@storybook/react-vite';
import { DataGrid } from '@andychoucoding/ui';
import { figmaDesignParam } from '../../figma-links';

const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'name', headerName: 'Name', width: 160 },
  { field: 'role', headerName: 'Role', width: 160 },
];

const rows = [
  { id: 1, name: 'Ada Lovelace', role: 'Engineer' },
  { id: 2, name: 'Grace Hopper', role: 'Engineer' },
  { id: 3, name: 'Alan Turing', role: 'Researcher' },
];

const meta: Meta<typeof DataGrid> = {
  title: 'Components/DataGrid',
  component: DataGrid,
  parameters: { design: figmaDesignParam('DataGrid') },
};

export default meta;
type Story = StoryObj<typeof DataGrid>;

export const Default: Story = {
  render: () => (
    <div style={{ height: 300, width: 500 }}>
      <DataGrid columns={columns} rows={rows} />
    </div>
  ),
};
