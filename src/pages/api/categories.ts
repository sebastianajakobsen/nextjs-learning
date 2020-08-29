import {NextApiRequest, NextApiResponse} from "next";

export default function getAllCategories (req: NextApiRequest, res:NextApiResponse) {
    if(req.method !== 'GET') {
        res.status(500).json({message:'sorry we only accept get request'})
    }
    res.json({hello:'World'})
}