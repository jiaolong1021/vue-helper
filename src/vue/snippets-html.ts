export default (tabSize: string) => {
  return {
"vcomponent": `<component :is="\${1:componentId}"></component>$0`,
"vka": `<keep-alive$1>
${tabSize}$2
</keep-alive>$0`,
"vtransition": `<transition$1>
${tabSize}$2
</transition>$0`,
"vtg": `<transition-group$1>
${tabSize}$2
</transition-group>`,
"vrl": `<router-link $1>$2</router-link>$0`,
"vrlt": `<router-link to="$1">$2</router-link>$0`,
"vrv": `<router-view>$1</router-view>$0`,
  }
}