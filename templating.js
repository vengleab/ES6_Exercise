
//1 The tooling team
console.log('==================1 The tooling team');

const teamName = "tooling"
const people = [{name: "Jennie", role: "senior"},
                {name: "Ronald", role: "junior"},
                {name: "Martin", role: "senior"},
                {name: "Anneli", role: "junior"}]
const seniorRole = 'senior'
const names = people.map(({name})=>name).join(',');
const nSenior = people.filter(({role})=> role === seniorRole ).length;
let message = `There are ${people.length} people on the ${teamName} team.
Their names are ${names}.
${nSenior} of them have a ${seniorRole} role.`;

console.log(message)
console.log('==================1 The tooling team');


//2 HTML templating
console.log('================== //2 HTML templating');

function html(strs, ...params) {
  let string = '';
  for( let i = 0; i < strs.length; i++ ){
    console.log('tt', params[i] || "");
    
    string += `${escapeHTML(strs[i])}${ escapeHTML(params[i] || "") }`;
  }
  return string;
}

const mustEscape = '<>&"'
console.log(html`You should escape the ${mustEscape.length} characters “${mustEscape}” in HTML`)

function escapeHTML(string) {
  return String(string).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;")
  	.replace(/>/g, "&gt;")
}

console.log('================== //2 HTML templating');
