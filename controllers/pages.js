//  file ini berisikan berbagai pages yang akan digunakan

//home page
export const Home = (req,res) => {
    res.send('welcome to the homepage bruh')
}

export const About = (req,res) => {
    res.send('welcome to the about page')
}

export const Contact = (req, res) => {
    res.send('you are in the contact page!')
}

