import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md'
import "../globals.css"

export default class Home extends Component {
    render() {
        let { title, cats } = attributes
        return (
            <>
                <Head>
                    <title>{title}</title>
                </Head>
                <article className="min-h-screen bg-gray-100 p-8">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl font-bold text-center mb-8">{title}</h1>
                        <div className="prose lg:prose-xl mx-auto mb-8">
                            <HomeContent />
                        </div>
                        <ul className="space-y-8">
                            {cats.map((cat, k) => (
                                <li key={k} className="bg-white p-6 rounded-lg shadow-lg">
                                    <h2 className="text-2xl font-semibold mb-2">{cat.name}</h2>
                                    <p className="text-gray-700">{cat.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>
            </>
        )
    }
}