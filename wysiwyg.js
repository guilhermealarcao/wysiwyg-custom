window.wysiwygCustom = {
init: function(id){
        var id = id == undefined ? "wysiwyg" : id;
        var wysiwyg=document.getElementById(id);
        var conteudo_antigo = wysiwyg.innerHTML;
        wysiwyg.innerHTML=`<div id="toolbar"> <div class="toolbar__tool toolbar__tool--bold" onclick="wysiwygCustom.format('bold')"> <img src="https://png.icons8.com/android/48/000000/bold.png" width="16"> </div><div class="toolbar__tool " onclick="wysiwygCustom.format('italic')"> <img src="https://png.icons8.com/metro/48/000000/italic.png" width="16"> </div><div class="toolbar__tool toolbar__tool--underline" onclick="wysiwygCustom.format('underline')"> <img src="https://png.icons8.com/android/48/000000/underline.png" width="16"> </div><div class="toolbar__tool toolbar__tool--h1" onclick="wysiwygCustom.formatParam('formatBlock','H1')">H1</div><div class="toolbar__tool toolbar__tool--h1" onclick="wysiwygCustom.formatParam('formatBlock','H2')">H2</div><div class="toolbar__tool toolbar__tool--h1" onclick="wysiwygCustom.formatParam('formatBlock','H3')">H3</div><div class="toolbar__tool toolbar__tool--h1" onclick="wysiwygCustom.formatParam('formatBlock','P')">P</div><div class="toolbar__tool" onclick="wysiwygCustom.format('insertUnorderedList')"> <img src="https://png.icons8.com/ios/100/000000/bulleted-list.png" width="20"> </div><div class="toolbar__tool" onclick="wysiwygCustom.format('insertOrderedList')"> <img src="https://png.icons8.com/ios/100/000000/numbered-list.png" width="22"> </div><div class="toolbar__tool" onclick="wysiwygCustom.format('justifyLeft')"> <img src="https://png.icons8.com/ios/40/000000/align-left-filled.png" width="22"> </div><div class="toolbar__tool" onclick="wysiwygCustom.format('justifyCenter')"> <img src="https://png.icons8.com/ios/40/000000/align-justify-filled.png" width="22"> </div><div class="toolbar__tool right-flex" onclick="wysiwygCustom.format('justifyRight')"> <img src="https://png.icons8.com/ios/40/000000/align-right-filled.png" width="22"> </div></div>`
        var toolbar=document.getElementById('toolbar');
        var width=wysiwyg.dataset.width;
        var height=wysiwyg.dataset.height;
        toolbar.style.width=width;
        var editor = document.createElement("iframe");
        editor.id = "editor"
        editor.classList.add("editor");
        editor.style.width=width;
        editor.style.height=height;
        wysiwyg.appendChild(editor)
        var iframeNode =document.getElementById(editor.id);
        iframeNode.contentDocument.designMode = "on";
        this.setHtml(conteudo_antigo);
},
setHtml: function(txt){
        var code=editor.contentDocument.getElementsByTagName('body')[0].innerHTML = txt;
        return code
},
format:function(cmd){
        editor.contentDocument.execCommand(cmd,!1,null)
},
formatParam:function(cmd,param){
        editor.contentDocument.execCommand(cmd,!1,param)
},
getHtml:function(){
        var code=editor.contentDocument.getElementsByTagName('body')[0].innerHTML;
        return code
}
}
