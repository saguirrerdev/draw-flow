<template>
  <v-card elevation="9">
    <div id="drawflow"></div>
  </v-card>
</template>

<script>
import Vue from 'vue'
import Drawflow from 'drawflow'
import styleDrawflow from 'drawflow/dist/drawflow.min.css'

//drawflow components
import { components } from './drawflow-nodes/nodes'

const validConnections = {
    'Df_for':           ['Df_code', 'Df_print'],
    'Df_conditional':   ['Df_code', 'Df_print'],
    'Df_add':           ['Df_number', 'Df_divide', 'Df_multiply', 'Df_substraction', 'Df_add'],
    'Df_substraction':  ['Df_number', 'Df_divide', 'Df_multiply', 'Df_substraction', 'Df_add'],
    'Df_multiply':      ['Df_number', 'Df_divide', 'Df_multiply', 'Df_substraction', 'Df_add'],
    'Df_divide':        ['Df_number', 'Df_divide', 'Df_multiply', 'Df_substraction', 'Df_add'],
    'Df_number':        ['Df_number', 'Df_divide', 'Df_multiply', 'Df_substraction', 'Df_add'],
}       


export default {
    name: 'Drawflow',

    computed: {
        editor: {
            get(){
                return this.$store.state.editor
            },

            set(val){
                this.$store.commit('SET_EDITOR', val)
            }
        }
    },

    mounted() {
        this.initialize()
    },

    methods: {
        initialize() {
            this.setDrawflow()
        },

        setDrawflow() {
            const container = document.getElementById('drawflow')
            this.editor = new Drawflow(container, Vue, this)
            this.editor.reroute = true;

            this.events()
            this.editor.start()
            this.registerNodes()
        },

        registerNodes(){
            components.forEach(c => {
                this.editor.registerNode(
                    c.name,
                    c,
                )
            })
        },

        events(){
            this.editor.on('connectionCreated', (e) => {
                const from = this.editor.getNodeFromId(e.output_id)
                const to = this.editor.getNodeFromId(e.input_id)

                if(!validConnections[from.html].includes(to.html)){
                    this.editor.removeConnectionNodeId(`node-${e.output_id}`)
                    console.log('No permitido')
                }
            })

            this.editor.on('connectionRemoved', (e) => {
                const to = this.editor.getNodeFromId(e.input_id)
                switch(to.html) {
                    case 'Df_add': this.add(e)
                       break;
                    case 'Df_for': this.for(e)
                        break;
                    default: return
                }
            })

            this.editor.on('nodeDataChanged', (id) => {
                const node = this.editor.getNodeFromId(Number(id));
                this.editor.removeConnectionNodeId(`node-${id}`)
            })
        },

        add(e){
            const data = this.editor.getNodeFromId(e.input_id)
            const { inputs } = this.editor.getNodeFromId(e.input_id)

            let input1 = 0;
            let input2 = 0;

            inputs.input_1.connections.forEach(element => {
                input1 += Number(this.getNodeValue(element.node))
            });
            inputs.input_2.connections.forEach(element => {
                input2 += Number(this.getNodeValue(element.node))
            });

            const rs = input1 + input2

            this.editor.updateNodeDataFromId(data.id, { value: rs+'' })
        },

        for(e){
            const { id, inputs } = this.editor.getNodeFromId(e.input_id)

            const from = inputs.input_1.connections.length > 0 ? this.editor.getNodeFromId(inputs.input_1.connections[0].node).data.value : 0
            const till = inputs.input_2.connections.length > 0 ? this.editor.getNodeFromId(inputs.input_2.connections[0].node).data.value : parseInt(from, 10)+1
            

            this.editor.updateNodeDataFromId(id, { from: from+'', till: till+'' })

        },

        getNodeValue(node){
            return this.editor.getNodeFromId(Number(node)).data.value
        }
    },

}
</script>

<style>
  #drawflow{
    height: 80vh;
    max-width: 100%;
  }
</style>