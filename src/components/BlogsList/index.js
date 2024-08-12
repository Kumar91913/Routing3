import {Component} from 'react'
import BlogItem from '../BlogItem'
import {TailSpin} from 'react-loader-spinner'
import './index.css'
class BlogsList extends Component {
   state = {blogsData:[], isLoading: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const UpdatedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic:eachItem.topic,
     }))
    this.setState({blogsData: UpdatedData,isLoading:false})
  }



  render() {
    const {blogsData} = this.state
    const {isLoading} = this.state
    return (
      <div className="blog-list-container">
        {isLoading ? (
       <TailSpin
       height="80"
       width="80"
       color="#4fa94d"
       ariaLabel="tail-spin-loading"
       radius="1"
       wrapperStyle={{}}
       wrapperClass=""
       visible={true}
     />
        ):(
          blogsData.map(item => <BlogItem blogsData={item} key={item.id} />)
          )}
      </div>
    )
        }
      }
  
export default BlogsList
