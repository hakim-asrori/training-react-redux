import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, ActivityIndicator, StyleSheet, Image } from 'react-native'
import { connect } from 'react-redux'

const mapStateToProps = (state: any) => {
  return {
    articles: state
  }
}

function Home(): JSX.Element {
  const [articles, setArticle] = useState([])

  const getArticles = async () => {
    try {
      const response = await fetch("https://api-berita-indonesia.vercel.app/antara/terbaru/");
      const articleData = await response.json();

      setArticle(articleData.data?.posts)
    } catch (error) {
      console.error(error);
    }
  }

  const limitText = (text: string, count: number) => {
    return text.slice(0, count) + (text.length > count ? "..." : "")
  }

  useEffect(() => {
    getArticles()
  }, [])

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#E1E4F0' }}>
      {!articles ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <ScrollView>
          {articles.map((article, index) => {
            return (
              <View style={[styles.card]} key={index}>
                <View style={styles.cardHeader}>
                  <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                      <View>
                        <View style={{ backgroundColor: 'orange', padding: 7, borderRadius: 50 }} >
                          <Text style={[styles.cardAuthor, { color: 'white' }]}>AP</Text>
                        </View>
                      </View>
                      <View>
                        <Text style={styles.cardAuthor}>API Public</Text>
                      </View>
                    </View>
                    <View>
                      <Text style={styles.cardTitle}>{limitText(article.title, 30)}</Text>
                    </View>
                  </View>
                  <View>
                    <Image style={styles.cardImage} source={{ uri: article.thumbnail }} height={100} width={100} />
                  </View>
                </View>
                <View style={{ flex: 1, marginRight: 5 }}>
                  <Text style={{ color: '#5F0F40', textAlign: 'justify' }}>
                    {article.description}
                  </Text>
                </View>
              </View>
            )
          })}
        </ScrollView>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#F6F8FFCC',
    flexDirection: 'column',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 16,
    gap: 10,
  },
  cardHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: '700'
  },
  cardAuthor: {
    fontSize: 14,
    color: 'black',
    fontWeight: '400'
  },
  cardImage: {
    borderRadius: 10
  }
})

export default connect(
  mapStateToProps
)(Home)