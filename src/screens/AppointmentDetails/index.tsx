import React from 'react'
import { ImageBackground, Text, View, FlatList } from 'react-native'
import { Fontisto } from '@expo/vector-icons'
import { Background } from '../../components/Background'
import { ListHeader } from '../../components/ListHeader'
import { Header } from '../../components/Header'
import { Member } from '../../components/Member'
import { ListDivider } from '../../components/ListDivider'
import { ButtonIcon } from '../../components/ButtonIcon'

import { BorderlessButton } from 'react-native-gesture-handler'

import { styles } from './styles'

import BannerImg from '../../assets/banner.png'

import { theme } from '../../global/styles/theme'

export function AppointmentDetails() {

  const members = [
    {
      id: '1',
      username: 'Gabriel Cursi',
      avatar_url: 'https://github.com/gabrielcursi.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Gabriel Cursi',
      avatar_url: 'https://github.com/gabrielcursi.png',
      status: 'offline'
    }
  ]

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />
      <ImageBackground
        style={styles.banner}
        source={BannerImg}
      >
        <View style={styles.bannerContent}>

          <Text
            style={styles.title}
          >
            Lendários
          </Text>

          <Text
            style={styles.subtitle}
          >
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>
      <ListHeader
        title="Jogadores"
        subtitle="Total 3"
      />

      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        style={styles.members}
      />
      <View style={styles.footer}>
        <ButtonIcon
          title="Entrar na partida"
        />
      </View>
    </Background>
  )
}