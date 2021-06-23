import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"

interface ITagRequest{
  name: string
}

class CreateTagService {
  async execute({ name } : ITagRequest){
    const tagsRepositories = getCustomRepository(TagsRepositories)

    if(!name){
      throw new Error("Please, enter a name.")
    }

    const tagAlreadyExists = await tagsRepositories.findOne({ name })
    
    if(tagAlreadyExists){
      throw new Error("TAG already exists.")
    }
  
    const tag = tagsRepositories.create({ name })
  
    await tagsRepositories.save(tag)

    return tag
  }

}

export { CreateTagService }