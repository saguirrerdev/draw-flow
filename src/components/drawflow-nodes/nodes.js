import TextComponent from './Text.vue'
import NumberComponent from './Number.vue'
import AddComponent from './Add.vue'
import MultiplyComponent from './Multiply.vue'
import SubstractionComponent from './Substraction.vue'
import DivideComponent from './Divide.vue'
import ForComponent from './For.vue'
import PrintComponent from './Print.vue'
import ConditionalComponent from './Conditional.vue'
import CodeComponent from './Code.vue'

export const components = [
    // TextComponent,
    NumberComponent,
    AddComponent,
    SubstractionComponent,
    MultiplyComponent,
    DivideComponent,
    ForComponent,
    PrintComponent,
    ConditionalComponent,
    CodeComponent
]

export const dfNode = function(node) {
    const Text = [
        'Home', //module
        0, //Inputs
        1, //Outputs
        20, // Posx
        100, //Posy
        'text', //class,
        { value: "" },//data
        TextComponent.name,//vue component name
        'vue'
    ]
    
    const Number = [
        'Home', //module
        0, //Inputs
        1, //Outputs
        20, // Posx
        100, //Posy
        'number', //class,
        { value: "0" },//data
        NumberComponent.name,//vue component name
        'vue'
    ]

    const Add = [
        'Home', //module
        2, //Inputs
        1, //Outputs
        20, // Posx
        100, //Posy
        'add', //class,
        { value: "0"},//data
        AddComponent.name,//vue component name
        'vue'
    ]
    
    const Substraction = [
        'Home', //module
        2, //Inputs
        1, //Outputs
        20, // Posx
        100, //Posy
        SubstractionComponent.node_key, //class,
        { value: "0"},//data
        SubstractionComponent.name,//vue component name
        'vue'
    ]

    const Divide = [
        'Home', //module
        2, //Inputs
        1, //Outputs
        20, // Posx
        100, //Posy
        DivideComponent.node_key, //class,
        { value: "0"},//data
        DivideComponent.name,//vue component name
        'vue'
    ]

    const Multiply = [
        'Home', //module
        2, //Inputs
        1, //Outputs
        20, // Posx
        100, //Posy
        MultiplyComponent.node_key, //class,
        { value: "0"},//data
        MultiplyComponent.name,//vue component name
        'vue'
    ]
    
    const For = [
        'Home', //module
        0, //Inputs
        1, //Outputs
        20, // Posx
        100, //Posy
        'for', //class,
        { from: "0", till: "1" },//data
        ForComponent.name,//vue component name
        'vue'
    ]
    
    const Print = [
        'Home', //module
        1, //Inputs
        0, //Outputs
        20, // Posx
        100, //Posy
        'print', //class,
        { value: 'Hola mundo' },//data
        PrintComponent.name,//vue component name
        'vue'
    ]

    const Conditional = [
        'Home', //module
        0, //Inputs
        2, //Outputs
        20, // Posx
        100, //Posy
        'conditional', //class,
        { condition: '1 == 1' },//data
        ConditionalComponent.name,//vue component name
        'vue'
    ]

    const Code = [
        'Home', //module
        0, //Inputs
        0, //Outputs
        20, // Posx
        100, //Posy
        'code', //class,
        {},//data
        CodeComponent.name,//vue component name
        'vue'
    ]
    
    const nodes = {
        Text,
        Number,
        Add,
        Substraction,
        Multiply,
        Divide,
        For,
        Print,
        Conditional,
        Code,
    }

    return nodes[node] || null
}