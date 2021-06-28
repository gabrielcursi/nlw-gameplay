import React from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { Guild, GuildProps } from '../../components/Guild'
import { ListDivider } from '../../components/ListDivider'

type Props = {
  handleGuildSelect: (guild: GuildProps) => void
}

export function Guilds({ handleGuildSelect }: Props) {

  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'image.png',
      owner: true
    },
    {
      id: '2',
      name: 'Lendários',
      icon: 'image.png',
      owner: true
    }
  ]

  return (
    <View style={styles.container}>
      <FlatList
        ItemSeparatorComponent={() => <ListDivider />}
        data={guilds}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
        renderItem={({ item }) => (
          <Guild
            data={item}
            onPress={() => handleGuildSelect(item)}
          />
        )}
      />

    </View>
  )
}