<template>
    <div>
        <form> 
        <textarea id="yourcode" cols="40" rows="10">
        </textarea><br /> 
        <button type="button" @click="runit">Ejecutar</button> 
        </form> 
        <pre id="output" ></pre>
    </div>
</template>

<script>
// output functions are configurable.  This one just appends some text
// to a pre element.
function outf(text) { 
    var mypre = document.getElementById("output"); 
    mypre.innerHTML = mypre.innerHTML + text; 
} 
function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}

export default {
    name: 'Skulpt',

    methods:{
        runit() { 
            var prog = document.getElementById("yourcode").value; 
            var mypre = document.getElementById("output"); 
            mypre.innerHTML = '';
            Sk.pre = "output";
            Sk.configure({output:outf, read:builtinRead}); 
            try {
                eval(Sk.importMainWithBody("<stdin>",false,prog)); 
            }
            catch(e) {
                alert(e.toString())
            }
        }
    }
}
</script>