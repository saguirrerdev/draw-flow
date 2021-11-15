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
    NumberComponent,
    AddComponent,
    SubstractionComponent,
    DivideComponent,
    MultiplyComponent,
    ForComponent,
    PrintComponent,
    ConditionalComponent,
    CodeComponent
]

export const dfNode = function(node) {    
    const Number = [
        'Home',
        0,
        1,
        20,
        100,
        NumberComponent.node_key,
        { value: "0" },
        NumberComponent.name,
        'vue'
    ]

    const Add = [
        'Home',
        2,
        1,
        20,
        100,
        AddComponent.node_key,
        { value: "0"},
        AddComponent.name,
        'vue'
    ]
    
    const Substraction = [
        'Home',
        2,
        1,
        20,
        100,
        SubstractionComponent.node_key,
        { value: "0"},
        SubstractionComponent.name,
        'vue'
    ]

    const Divide = [
        'Home',
        2,
        1,
        20,
        100,
        DivideComponent.node_key,
        { value: "0"},
        DivideComponent.name,
        'vue'
    ]

    const Multiply = [
        'Home',
        2,
        1,
        20,
        100,
        MultiplyComponent.node_key,
        { value: "0"},
        MultiplyComponent.name,
        'vue'
    ]
    
    const For = [
        'Home',
        0,
        1,
        20,
        100,
        ForComponent.node_key,
        { from: "0", till: "1" },
        ForComponent.name,
        'vue'
    ]
    
    const Print = [
        'Home',
        1,
        0,
        20,
        100,
        PrintComponent.node_key,
        { value: 'Hola mundo' },
        PrintComponent.name,
        'vue'
    ]

    const Conditional = [
        'Home',
        0,
        2,
        20,
        100,
        ConditionalComponent.node_key,
        { condition: "1 == 1" },
        ConditionalComponent.name,
        'vue'
    ]

    const Code = [
        'Home',
        1,
        0,
        20,
        100,
        CodeComponent.node_key,
        { value: "" },
        CodeComponent.name,
        'vue'
    ]
    
    const nodes = {
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