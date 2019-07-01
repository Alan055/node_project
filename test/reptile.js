// 爬虫

const request = require('request')
const cheerio = require('cheerio')
const fn = require('./../common/common').fn

let startNum = 1

let timer = setInterval(function () {
		reptile(startNum++)
}, 100)

function reptile(num) {
	request('https://ask.csdn.net/questions/' + num, (err, res) => {

		if (err) {
			console.log(err)

		} else {
			let $ = cheerio.load(res.body);
			let title = $($('div.questions_detail_con>dl>dt')[0]).text().trim().replace(/"/g,'')
			if(!title){
				return
			}
			let answer = $($('div.answer_sort_con p')[0]).text().replace('个回答', '')
			let date = $($('em.ask_pub_date')[0]).text().replace('发布于：','')
			let url = 'https://ask.csdn.net/questions/' + num

			const sql = `insert into reptile values(null, "${title}", ${answer?parseInt(answer):0},"${date}","${url}")`
			fn(sql).then(result=>{
				console.log('添加成功：'+result.insertId)
				if(result.insertId > 30000){
					clearInterval(timer)
				}
			}).catch(err=>{
				console.log(err)
			})
		}

	})

}


exports.index = reptile
