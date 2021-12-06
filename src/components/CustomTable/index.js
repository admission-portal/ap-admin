
import { Table, Input, Button, Space } from 'antd'
import Highlighter from 'react-highlight-words'
import { SearchOutlined } from '@ant-design/icons'
import { useState } from 'react'
import './style.css'

export default function CustomTable({ data, customTableColumnsData }) {
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
    const handleDelete = (id) => console.log(id)
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

    // data related to columns, will be coming from props and we need to destruct the incoming , as well as the searchprops that is defined above.  
    let columns = [];
    if (customTableColumnsData !== undefined)
        customTableColumnsData.forEach(element => {
            columns.push(
                {
                    ...getColumnSearchProps(element.key),
                    ...element,
                }
            )
        });

    return (
        <Table
            responsive={true}
            columns={columns}
            pagination={{
                pageSize: 5
            }}
            bordered
            dataSource={data}
            scroll={{ x: 1300 }}
        />
    )
}
