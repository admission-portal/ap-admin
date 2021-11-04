
import { Table, Input, Button, Space } from 'antd'
import Highlighter from 'react-highlight-words'
import { SearchOutlined } from '@ant-design/icons'
import { useState } from 'react'
import './style.css'

const data = [
    {
        key: '1',
        name: 'John Brown',
        branch: 'IT',
        institute: 'DEPSTAR',
        feesPaid:'Not Paid',
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Joe Black',
        branch: 'CE',
        institute: 'CSPIT',
        feesPaid:'Paid',
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        branch: 'CE',
        institute: 'CSPIT',
        feesPaid:'Paid',
        address: 'London No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Joe Black',
        branch: 'CE',
        institute: 'CSPIT',
        feesPaid:'Paid',
        address: 'London No. 1 Lake Park',
    },
    {
        key: '5',
        name: 'Joe Black',
        branch: 'CE',
        institute: 'CSPIT',
        feesPaid:'Paid',
        address: 'London No. 1 Lake Park',
    },
    {
        key: '6',
        name: 'Jim Green',
        branch: 'ME',
        institute: 'CSPIT',
        feesPaid:'Paid',
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '7',
        name: 'Jim Green',
        branch: 'ME',
        institute: 'CSPIT',
        feesPaid:'Paid',
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '8',
        name: 'Jim Green',
        branch: 'ME',
        institute: 'CSPIT',
        feesPaid:'Paid',
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '9',
        name: 'Jim Green',
        branch: 'ME',
        institute: 'CSPIT',
        feesPaid:'Paid',
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '10',
        name: 'Jim Green',
        branch: 'ME',
        institute: 'CSPIT',
        feesPaid:'Paid',
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '11',
        name: 'Jim Red',
        branch: 'ME',
        institute: 'CSPIT',
        feesPaid:'Not Paid',
        address: 'London No. 2 Lake Park',
    },
];
export default function CustomTable() {
    const [searchText, setsearchText] = useState('')
    const [searchedColumn, setsearchedColumn] = useState('')
    let searchInput;

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setsearchText(selectedKeys[0])
        setsearchedColumn(dataIndex)
    };

    const handleReset = clearFilters => {
        clearFilters();
        setsearchText('')
    };
    const getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setsearchText(selectedKeys[0])
                            setsearchedColumn(dataIndex)

                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => searchInput.select(), 100);
            }
        },
        render: text =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            // width: '30%',
            ...getColumnSearchProps('name'),
            responsive: ['md'],
        },
        {
            title: 'Branch',
            dataIndex: 'branch',
            key: 'branch',
            // width: '20%',
            responsive: ['md'],
            ...getColumnSearchProps('branch'),
        },
        {
            title: 'Institute',
            dataIndex: 'institute',
            key: 'institute',
            responsive: ['md'],
            // width: '20%',
            ...getColumnSearchProps('institute'),
        },
        {
            title: 'Fees Paid',
            dataIndex: 'feesPaid',
            key: 'feesPaid',
            responsive: ['md'],
            ...getColumnSearchProps('feesPaid'),
            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
        },
    ];

    return (
        <Table
        responsive={true}
        columns={columns}
        // dataSource={data}
        pagination={{
            pageSize:5
        }}
        dataSource={data}
        />
    )
}
