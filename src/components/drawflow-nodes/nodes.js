import TextComponent from './Text.vue'
import NumberComponent from './Number.vue'
import AddComponent from './Add.vue'

export const components = [
    TextComponent,
    NumberComponent,
    AddComponent,
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
    
    const nodes = {
        Text,
        Number,
        Add
    }

    return nodes[node] || null
}