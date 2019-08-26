import { Row, Col, Form, Input } from 'antd';
function PCandWXNum({ data, keyWords, getFieldDecorator, disabled = false }) {
  const pcAndWXNumLayout = {
    labelCol: {
      xxl: { span: 6 },
      xl: { span: 10 },
    },
    wrapperCol: {
      xxl: { span: 14 },
      xl: { span: 14 },
    },
  };
  return (
    <Row>
      <Col span={8}>
        <Form.Item label="PC展示数量" {...pcAndWXNumLayout}>
          {getFieldDecorator(`${keyWords}.pcNum`, {
            initialValue: data.pcNum,
            rules: [{ required: true, message: '请输入PC展示数量' }],
          })(<Input disabled={disabled} />)}
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item label="小程序展示数量" {...pcAndWXNumLayout}>
          {getFieldDecorator(`${keyWords}.xcxNum`, {
            initialValue: data.xcxNum,
            rules: [{ required: true, message: '请输入小程序展示数量' }],
          })(<Input disabled={disabled} />)}
        </Form.Item>
      </Col>
    </Row>
  );
}
export default PCandWXNum;
