import { Separator } from '@/components/ui/separator'
import React from 'react'

type Props = {
  featuresArray: {
    id: number
    title: string
    slug: string
  }[]
}
const MainContent = ({featuresArray}:Props) => {
    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                <div className="border px-2 py-3">
                    <h2>FEATUES LIST</h2>
                    <div className="">
                        {featuresArray.map((feature) => (
                            <div key={feature.id} className="">
                                <h3>{feature.title}</h3>
                                <Separator />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MainContent