import React from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { Guild, GuildProps } from '../../components/Guild'
import { Load } from '../../components/Load'
import { ListDivider } from '../../components/ListDivider'
import { useState } from 'react'
import { api } from '../../services/api'
import { useEffect } from 'react'

type Props = {
  handleGuildSelect: (guild: GuildProps) => void
}

export function Guilds({ handleGuildSelect }: Props) {

  const [guilds, setGuilds] = useState<GuildProps[]>([])
  const [loading, setLoading] = useState(true)

  async function fetchGuilds() {
    const response = await api.get('/users/@me/guilds')

    setGuilds(response.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchGuilds()
  }, [])

  return (
    <View style={styles.container}>
      {
        loading
          ? <Load />
          :
          <FlatList
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            ListHeaderComponent={() => <ListDivider isCentered />}
            data={guilds}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            style={styles.guilds}
            contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
            renderItem={({ item }) => (
              <Guild
                data={item}
                onPress={() => handleGuildSelect(item)}
              />
            )}
          />
      }

    </View>
  )
}