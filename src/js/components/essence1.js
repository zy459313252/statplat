/**
 * Created by luye on 29/03/2017.
 */
import React from 'react';
import LuyeTable from './luyeTable/luyeTable';
export default class Essence1 extends React.Component{
  render(){
    return(
      <div><div id="tb-div"></div></div>
    )
  }
  componentDidMount(){
    console.log('did mount!!');
    let tb = new LuyeTable({
      el:document.getElementById('tb-div'),
      columns : [{cname : '团队名称', cdata : 'tname', action:'click'},
        {cname : '代码行总数', cdata : 'code_count', style:'hide'},
        {cname : '提交文件总数', cdata : 'file_count', action:'click'},
        {cname : '团队总得分', cdata : 'tscore'}]
    })
  }
}
