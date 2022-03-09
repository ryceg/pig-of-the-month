export type GuineaPigNames = 'Peggy' | 'Heidi' | 'Hildy'

interface Data {
  fullName: string
  birthday: Date | string
  namesake: {
    name: string
    description: string
  }
  favourite: {
    food: string
    veggie: string
    treat: string
    colour: string
  }
  photos: {
    thumbnail: Photo
  }
}

interface Photo {
  url: string
  caption: string
}

export const guineapigs: Record<GuineaPigNames, Data> = {
  'Peggy': {
    fullName: 'Peggy Glanville-Squeaks',
    birthday: '2020/12/04',
    namesake: {
      name: 'Peggy Glanville-Hicks',
      description: 'Australian composer'
    },
    favourite: {
      food: 'string',
      veggie: 'string',
      treat: 'string',
      colour: 'indigo'
    },
    photos: {
      thumbnail: {
        url: 'https://lh3.googleusercontent.com/aLjYqfnKYvf9NFbP4v1qXdOxcDq3h4pPRUTFBJ_2RwpWTXAFAeoV8eqDjyX7kGNS1HeALpN8mM8a1yv8FJcn9Yc0-_WGzXLxeuO88WqhUOYi9qhbPyrfh-cAgKl-BmhTHb0AUhQ9muQRu83gt6JQu4-J4PnF1nX-aG0k076iSoB_8ffqVNOZ9J3qhPFxMi-4eHJaKBbFKD00qDujKnTSdPc129HLuRSm_Zrm0GcSXqZGGqnxhlPCMDmG2m_HDMLxOa0Kz1vsHgnnMgWXJp9BqynnDaynhBmzk0jQPt_6CEo-dyZK6aFNBizlQHpHmDb0wCzWiCLwYLiy_bjRESMuDt6Rk1CdSJJVQci0Ll3840ElP4pWWFTxwyUBbwO25NvSqtP126ZU0ADPaPK8EUoBnmcdsiIKQysXRcuaCBq_DSzpJSdr9Bad71KerhxThHFSxcLUNuA-SxxFKggVrrymft1rlXntStjQEFsMDc8U-adl1O0LrbVfsRahl6cTQJXut44Gr_5ilisioxMdezIWeJzpaW2j5doPZhojWsXHInIzoCQ6InWhj4O3DEF9Hpnh2a4oNzbpiHF5wMHW0EZmiFJVJUOJU1wmTFv_oCuOBr8zRHnNUwZp_ewdaSvcdaC_5h2OWkCqqGZsQK6pv1qx5fnlJbzZ1pXtiuO56qVQyZx82fbFcxQh3To5YeRoR3laJvdp0odTckr9OT31LHu6LArL=w1822-h1367-no?authuser=0',
        caption: 'Peggy lounging about'
      }
    }
  },
  'Heidi': {
    fullName: 'Miriam Hide',
    birthday: '2021/12/02',
    namesake: {
      name: 'Miriam Hyde',
      description: 'An Australian composer'
    },
    favourite: {
      food: 'string',
      veggie: 'string',
      treat: 'string',
      colour: 'green'
    },
    photos: {
      thumbnail: {
        url: 'https://lh3.googleusercontent.com/yVNETueAFk-KE-Y5eyE8mqINYkg-bmLm7JE5TT5dhjGjwdRlM0Zz_RYCxGv31vvyLwKbSk19JRoZFbh-6yzsk8Dl9vpHinmw2Ae453M9fTQ4rNXjLMpwBpAcddPedZ_QHCBbyGriC7738oYy4djfM-E4plJG8Eg93T-mYbp7lF28oARz6BVBQwHJrBfdsR9s_NN4BPHaOv2Y2I85FVoZiSOUb9-co8Jbc6F3NlXY_uGhPRtC7eebpvrMn8jOI_J-nF6ieFIsAYxyHmGat3rNrDLznEM8hS17q5CcznBIDuiFuQ8DvYbBWUgPuiHOYtsDT7vsb4gpi7oJYo3B6x4pWhivTbuKWQzcMbYL32phTWPXaZeBvwYI1nLBXt7NGhlLzHkS7nha2LhhYkVTdwwReWjIXWcFfUpEBXCTTOxCUOwnyPvnAZYCwYlsY6prbseHLaQDN4ma-pQoidRle2c9fnuDsxLauDY1jEgw9ZhuDWhwl-LeK9R95JMUrYCAldkKT5uMYnfPHbS6WINWgYnqbnyGKLE0M6gxUxWBwA_YyrDElH12ecqaVcGRiWfyzLfaX2pQECkZFvZ81KWG4LcKz_UkOvf0JDsHIoTblVZtsFCkXcUOMhyEAl1HZvKvPeSbjGa-1ewMgudB9bWfPXNRhdRUyYpYclySOZY1LXjaL3QgneQTlKwuD4eB9ZpZmmyCaFRduj3aLSkXpYhxKtpOK4aF=w1025-h1367-no?authuser=0',
        caption: 'Heidi means business.'
      }
    }
  },
  'Hildy': {
    fullName: 'Hildegard von Piggen',
    birthday: '2020/12/04',
    namesake: {
      name: 'Hildegard von Bingen',
      description: 'German composer and nun'
    },
    favourite: {
      food: 'string',
      veggie: 'string',
      treat: 'string',
      colour: 'pink'
    },
    photos: {
      thumbnail: {
        url: 'https://lh3.googleusercontent.com/McGyTXG3TNBpJO1WasgBjk2G5ziRi9YRj1wfwK7YlAG7xUNJybJpvd4KF4HyBvAuQEgovsKz_55RI-g-uuHv5RmAn2WTT8Q9aJ0jUnJGWXTLd28-0aFCQGEw3Ou2HioqOX4QkCIe0pJ-ccuUlZafWQwZelkJytH1NiJV1YNLE2_wwSmery8bZHxz48tzX4ULeDBuqWRymwHkoc8nveOWAqrq-49Ftlcy0ONEYE5kR9dOsi_Ek3YbeOx1YO4BdIgGyugJvucNnIb1giiVa_y0TR-GsT_iOPjb88AHfyAq5XaCtWVi0QsdKM3uC7ZYi1Ueu0bpX-QWn1SoGZJBRdKiJ55JpFCEeQTvcr9SBrcFXpHT8hyS1Ti8cmCNAF8FBnazJZzNRnFOHvYLqdPlBpSEXUmFXA__m_TkNJ6HCdgxskuoPF4-05_VEaq4ub_WeZVkP558mi65v_xxV1vXWA74SLHd8y14naS0hRpk_TCxXWu6qH5D3DIIoFrqz7ElM5AozdgAPxGGSLf6Afg7QDz345ySy0mqjZTED2mCxUyIIXlyMq9wvKJKb0GlmxfTBq8Ty8BNyt4c4gbB1Vu64f9HcCBPVLaaUYLAj4SNtyYPjsPokV7x29-kDuMEN2Mo6CCarl5LxeYxXHeCxGm6uAXZwkJOugsfI8GT_aHtejbbY3j9GbdAKa8XKnF5x1PwNDLIameLKgLzYsEEOrXcgU0VBsX8=w770-h1367-no?authuser=0',
        caption: 'Hildy has a very regal snoot.'
      }
    }
  }
}