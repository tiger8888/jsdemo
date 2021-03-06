/**
 * Created by supfn on 2017/5/18.
 */
window.onload=function () {

    var inputValue,
        ulInputValue = $('#ul-input').val(),
        beforeInputVal,   //保存输入前的值
        item = [],
        $ulList1 = document.getElementById('ulList1');
    //使用sortable插件进行拖动
    /*global Sortable*/
    if($ulList1){
       var sortable = Sortable.create($ulList1);
    }

    function addClass(ele,name) {
        $(ele).addClass(name)
    }
    function click(ele,func) {
        $(ele).on('click',func)
    }
    function input(ele,func) {
        $(ele).on('input',func)
    }

    (function eventBind() {
        click('.item',desModity);
        click('#button',addDesBtnClick);
        click('#insertEnd',insertEndclick);
        click('#ul-sure-button',ulSureBtnClick);
        click('.delete-btn',deleteLi);
        click('.modify-btn',modifyFun);
        click('.close-btn',sureBtnClick)
    }());

    //点击单个div，将输入框中的值复制给点击div中的p标签
    function desModity() {
        var _this = this;
        addClass(_this,'current');
        beforeInputVal = $('_this').find('p').html();
        $('.input-mask').show()

    }
    //点击确定按钮
    function addDesBtnClick() {
        inputValue = $('#input').val();
        //判断是否输入内容
        if(inputValue){
            alert('请输入您要修改的目的地');
            $('.item_container').find('.current').find('p').html(beforeInputVal)
        }else{

            $('.item_container').find('.current').find('p').html(inputValue)
        }
        $('#input').val('');
        $('.input-mask').hide();
        $('.item_container').find('.current').removeClass('current');
        inputValue = undefined;
    }
    //增加
    function insertEndclick() {
        $('.ul-input-container>p').html('新增目的地');
        $('#ul-list1').addClass('addBtnClick');
        $('.ul-input-mask').show();
    }
    //点击弹出框的确定按钮
    function ulSureBtnClick() {

        ulInputValue = $('#ul-input').val();
        //判断用户是否输入
        if(ulInputValue){
            //判断增加目的地还是修改目的地
            if($('#ul-list1').hasClass('addBtnClick')){
                var newLi = document.createElement('li');
                newLi.innerHTML ='<p>' + ulInputValue + '</p>' +
                    '<div class="icon">' +
                    '<img src="../sl-index-manager/img/modify.png" alt="修改" class="modify-btn">' +
                    '<img src="../sl-index-manager/img/delete.png" alt="删除" class="delete-btn" >'+
                    '</div>';
                $('#ul-list1').append(newLi)
            }else if($('#ul-list1').hasClass('modifyBtnClick')){
                $('#ul-list1').find('.current').find('p').html(ulInputValue);

            }
        } else{
            alert('请输入目的地')
        }
        $('#ul-list1').removeClass('modifyBtnClick');
        $('#ul-list1').removeClass('addBtnClick');
        $('.ul-input-mask').hide();
        $('.modify-btn').on('click',modifyFun);
        $('.delete-btn').on('click',deleteLi);
        $('#ul-list1').find('.current').removeClass('current');
        ulInputValue = ''
    }

    //删除
    function deleteLi() {
        var deleteValue = confirm('确认删除');
        if(deleteValue === true){
            var _this = this;
            $(_this).parent().parent().remove();
        }
    }

    //修改
    function modifyFun() {
        $('#ul-input').val('');
        $('#ul-list1').addClass('modifyBtnClick');
        $(this).parent().parent().addClass('current');
        $('.ul-input-mask').show();

    }

    function sureBtnClick() {
        $('.ul-input-mask').hide();
        $('.input-mask').hide()
    }


}
/**
 * Created by supfn on 2017/5/22.
 */
