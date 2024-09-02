import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import Table from "./Table";
import useSort from "../hooks/use-sort";

function SortableTable(props) {
    
    const { config, data } = props;

    const {
        sortOrder,
        sortBy,
        sortedData,
        setSortedColumn
    } = useSort(data, config);

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        };

        return {
            ...column,
            header: () => 
                <th className="cursor-pointer hover:bg-gray-100" onClick={() => setSortedColumn(column.label)}>
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
        };
    });

    return (
        <Table {...props} data={sortedData} config={updatedConfig} />
    );
};

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <div>
            <FaCaretUp />
            <FaCaretDown />
        </div>
    }
    if (sortOrder === null) {
        return <div>
            <FaCaretUp />
            <FaCaretDown />
        </div>
    } else if (sortOrder === 'asc') {
        return <div>
            <FaCaretUp />
        </div>
    } else if (sortOrder === 'desc') {
        return <div>
            <FaCaretDown />
        </div>
    }
}

export default SortableTable;