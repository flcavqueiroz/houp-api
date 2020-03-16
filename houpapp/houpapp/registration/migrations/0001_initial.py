# Generated by Django 3.0.3 on 2020-03-10 14:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Registration',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='nome')),
                ('cpf', models.CharField(max_length=11, verbose_name='cpf')),
                ('email', models.EmailField(max_length=254, verbose_name='email')),
                ('phone', models.CharField(max_length=20, verbose_name='telefone')),
                ('password', models.CharField(max_length=12, verbose_name='senha')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='criado em')),
            ],
            options={
                'verbose_name': 'cadastro',
                'verbose_name_plural': 'cadastros',
                'ordering': ('-created_at',),
            },
        ),
    ]