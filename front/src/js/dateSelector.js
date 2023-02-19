import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;

class dateSelector extends React.Component {
    constructor(props) {
        super(props);
    }

    onChange(value, dateString) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    }

    onOk(value) {
        let date = value[0].toDate().getTime()
        console.log('onOk: ', date);
    }

    render = () => {
        return (
            <Space direction="vertical" size={12}>
                <RangePicker
                    showTime={{format: 'HH:mm'}}
                    format="YYYY-MM-DD HH:mm"
                    onChange={this.onChange}
                    onOk={this.onOk}
                />
            </Space>
        )
    }
}

export default dateSelector;