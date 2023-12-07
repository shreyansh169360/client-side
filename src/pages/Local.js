import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import { Form, Input, Button, Checkbox } from 'antd';
import HomepageItems from '../components/HomepageItems';

const Local = () => {
        const [form] = Form.useForm();
        const l = Form.useWatch('Location', form);
        const [location , setLocation] = useState("");
        return (
                <Layout title={"Shop At Home - Best Offers"}>
                        {/* banner image */}
                        <img
                                src="/images/banner.png"
                                className="banner-img"
                                alt="bannerimage"
                                width={"100%"}
                        />
                        {/* banner image */}
                        <Form
                                form={form}
                                size='large'
                                name="basic"
                                layout='vertical'
                                style={{ display: 'flex', flexDirection: 'column', padding: '2% 10%' }}
                                autoComplete="off"
                        >
                                <Form.Item
                                        label="Please Enter Your Location"
                                        name="Location"
                                        rules={[
                                                {
                                                        required: true,
                                                        message: 'Please Enter Your Location',
                                                },
                                        ]}
                                >
                                        <Input />
                                </Form.Item>


                                <Form.Item
                                        style={{ margin: 'auto' }}
                                >
                                        <Button type="primary" htmlType="submit" onClick={() => setLocation(l)}>
                                                Submit
                                        </Button>
                                </Form.Item>
                        </Form>
                        {location && <HomepageItems location = {location}/>}
                </Layout>
        )
}

export default Local
