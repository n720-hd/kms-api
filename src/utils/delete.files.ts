import fs from 'fs/promises';

export const deleteFiles = async({fileToDelete}:{fileToDelete : {file : {path: string}[]}}) => {
    try {
        await Promise.all(
            fileToDelete.file.map(async(item) => {
                try {
                    await fs.access(item.path)
                    await fs.unlink(item.path)
                } catch (error) {
                    throw {msg: 'Error Deleting File'};
                }
            })
        )
    } catch (error) {
        throw {msg: 'Failed Deleting File'};
    }
}