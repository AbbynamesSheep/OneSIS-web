/** 模糊查询
 * @param: array  $search_data    搜索关键字
 */
public function ajax_search()
{
    $res['code'] = 0;
    $search_data = I('post.key');
    $conn = '';
    if (!empty($search_data)) {
        $key['name'] = array('like', '%' . $search_data . '%');
        $conn = M('users')->field('id,name, mobile,count')->where($key)->select();//查询数据
    }
    if ($conn) {
        $res['code'] = 1;
        $res['data'] = $conn;
        $res['msg'] = '成功';
    } else {
        $res['msg'] = '失败';
    }
    echo json_encode($res);
}