const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const louritydb = require("croxydb")
const Discord = require("discord.js")
module.exports = {
    name: "timeout-sistemi-sıfırla",
    description: "Timeout sistemini sıfırlarsın.",
    type: 1,
    options: [],

    run: async (client, interaction) => {
        // Lourity <3 discord.gg/altyapilar 
        const yetki = new Discord.EmbedBuilder()
            .setColor("Red")
            .setDescription("Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!")

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.reply({ embeds: [yetki], ephemeral: true })

        const basarili = new EmbedBuilder()
            .setColor("Green")
            .setDescription(`__**Timeout Sistemi**__ başarıyla sıfırlandı dostum!`)

        louritydb.delete(`timeoutSistemi_${interaction.guild.id}`)
        return interaction.reply({ embeds: [basarili], ephemeral: true }).catch((e) => { })

    }

};