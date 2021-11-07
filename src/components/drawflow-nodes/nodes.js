import TextComponent from './Text.vue'
import NumberComponent from './Number.vue'
import AddComponent from './Add.vue'
import ForComponent from './For.vue'
import PrintComponent from './Print.vue'

export const components = [
    TextComponent,
    NumberComponent,
    AddComponent,
    ForComponent,
    PrintComponent
]

export const dfNode = function(node) {
    const Text = [
        'Home', //module
        0, //Inputs
        1, //Outputs
        20, // Posx
        100, //Posy
        'text', //class,
        { value: '' },//data
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
        { value: 0 },//data
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
        { value: 0 },//data
        AddComponent.name,//vue component name
        'vue'
    ]
    
    const For = [
        'Home', //module
        2, //Inputs
        1, //Outputs
        20, // Posx
        100, //Posy
        'for', //class,
        { from: 0, till: 1 },//data
        ForComponent.name,//vue component name
        'vue'
    ]
    
    const Print = [
        'Home', //module
        1, //Inputs
        0, //Outputs
        20, // Posx
        100, //Posy
        'for', //class,
        { from: 0, till: 1 },//data
        PrintComponent.name,//vue component name
        'vue'
    ]
    
    const nodes = {
        Text,
        Number,
        Add,
        For,
        Print
    }

    return nodes[node] || null
}