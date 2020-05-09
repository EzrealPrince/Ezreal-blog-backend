const sqlFunc = require('../../../sql/sqlFunc')

module.exports = class Blog {
    addBlog(req, res, next) {
        console.log(req.body);
        const {
            title,
            intro,
            content,
            category,
            category_desc,
            tags
        } = req.body;
        const create_time = new Date()
        const update_time = new Date()
        const values = [0, title, intro, content, category, category_desc, tags.join(','), create_time, update_time];
        sqlFunc.add('blogs', values).then(res => {
            console.log(res);
            res.json({
                code: 200,
                msg: '添加成功',
                data: {
                    success: 1
                }
            })
        }).catch(err => {
            console.log(err);
            res.json({
                code: 10000,
                msg: '添加失败',
                data: err
            })
        })
    }
}