
const var1Node = $('.var1_input');
const var2Node = $('.var2_input');
const var3Node = $('.var3_input');
const var4Node = $('.var4_input');
const var5Node = $('.var5_input');
const var6Node = $('.var6_input');
const speachNode = $('.speach_input');

const buttonCreate = $('.create-text-button');
const buttonReplace = $('.replace_var_button');
const fairyTaleText = $('.fairy_tale_text');

const startObj = {
	"text":[
		"Жили-были {var1} да {var2}",
		"Была у них {var3}",
		"Снесла {var3} {var4}, не простое - золотое",
		"- {var1} бил, бил - не разбил",
		"- {var2} била, била - не разбила",
		"{var5} бежала, {var6} задела, {var4} упало и разбилось.",
		"{var1} плачет, {var2} плачет, а {var3} кудахчет:",
		"{speach}"
	]
}

buttonCreate.click(function() {
	fairyTaleText.html(startObj.text);
})

buttonReplace.click(function() {
	const var1 = var1Node.val();
	const var2 = var2Node.val();
	const var3 = var3Node.val();
	const var4 = var4Node.val();
	const var5 = var5Node.val();
	const var6 = var6Node.val();
	const speach = speachNode.val();

	const newObj = {
		"text":[
			`Жили-были ${var1} да ${var2}`,
			`Была у них ${var3}`,
			`Снесла ${var3} ${var4}, не простое - золотое`,
			`- ${var1} бил, бил - не разбил`,
			`- ${var2} била, била - не разбила`,
			`${var5} бежала, ${var6} задела, ${var4} упало и разбилось.`,
			`${var1} плачет, ${var2} плачет, а ${var3} кудахчет:`,
			`${speach}`
		]
	}

	fairyTaleText.html(newObj.text);
})