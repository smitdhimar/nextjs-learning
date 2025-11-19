'use client'
import React, { useState } from 'react'

interface blog{
    body: String,
    id: Number,
    title: String,
    userId: Number
}
interface ListPageProps{
  blogs: blog[]
}
const ListPage = ({blogs}: ListPageProps) => {
  console.log('blogs', blogs)
  return (
    <div>
      nested list
    </div>
  )
}

export default ListPage;