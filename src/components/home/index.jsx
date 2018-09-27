/**
 * Created by zengtao on 2017/5/19.
 */
import React from 'react';
import { Button, Input, Alert } from 'antd';
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as index_act from "../../actions";
import { mapstate } from "../../reducers/shuju"
import Head from '../public/head'
import {
    Link
} from 'react-router-dom';
import history from '../public/history';
import {cuns} from 'esn'


class Index extends React.Component {
    constructor(arg) {
        super(arg);

    }

    componentWillMount = () => {

    }

    goList=()=>{
        //这是现阶段router4使用点击跳转的方式，cuns是esn的一个sessionstorage的存储，这样存储的好处是，刷新页面也不会丢失
        cuns('parameter',"参数1");
        history.push('/pageList');
    }
    handleChangeText = (e) => {
        this.props.act_index_tit(e.target.value);
    }

    render() {
        //这里使用了嵌套路由，看不懂的，可以仔细的研究一下，对着我的写法做几次，就能理解了，不是很难
        return (
            <div className="home">
                <Head {...this.props} />
                <div className="index_caidan">
                    <Link to="/alice">Alice</Link> <Link to="/jermine">Jermine</Link>
                </div>
                
                <div>
                    {this.props.children}
                </div>
                <div>
                    <Input type="text" onChange={this.handleChangeText.bind(this)} placeholder="填入试试下面得字会变" />
                </div>
                <div>
                    <Alert message={this.props.red_index_tit} type="success" />
                </div>
                <div className="index_tiaozhuan" onClick={this.goList}>
                        跳转到列表去
                </div>
            </div>
        )
    }
}

function bindact(dispatch) {
    return bindActionCreators(index_act, dispatch)
}


export default connect(mapstate, bindact)(Index);