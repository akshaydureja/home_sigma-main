# Generated by Django 5.0.6 on 2024-06-27 09:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0015_leads_generated_by_leads_landing_link'),
    ]

    operations = [
        migrations.AddField(
            model_name='property',
            name='bedrooms',
            field=models.CharField(blank=True, max_length=10),
        ),
        migrations.AlterField(
            model_name='propertyimage',
            name='image_url',
            field=models.ImageField(upload_to='property_images/'),
        ),
    ]